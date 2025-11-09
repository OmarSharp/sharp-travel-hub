import type { Route } from './+types/create-trip'
import {comboBoxItems, restcountries, selectItems} from "~/constants";
import {cn, formatKey} from "~/lib/utils";
import React, {useState} from "react";
import {world_map} from "~/constants/world_map";
import {account} from "~/appwrite/client";
import {useNavigate} from "react-router";

"use client"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "~/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover"
import Header from "../../../components/Header";
import WorldMap from "../../../components/WorldMap";



export const loader = async () => {

        const response = await fetch('https://restcountries.com/v2/all?fields=name,flag,latlng');
        if (!response.ok) {
            console.error("Error fetching countries:", response.status, response.statusText);
            return [];
        }
        const data = await response.json();

        // Defensive checks
        if (!Array.isArray(data)) {
            console.error("Expected array, got:", data);
            return [];
        }

        // تنظيف وتحضير البيانات قبل الإرجاع
        const countries = data
            .filter(
                (country: any) =>
                    country.name &&
                    country.name.common &&
                    country.flags &&
                    (country.flags.svg || country.flags.png)
            )
            .map((country: any) => ({
                // علم الدولة + اسمها
                name: `${country.flag || ""} ${country.name.common}`,
                coordinates: country.latlng || [],
                value: country.name.common,
                openStreetMap: country.maps?.openStreetMap || "",
                flag: country.flags?.svg || country.flags?.png || "",
            }));

        console.log("✅ Countries loaded:", countries.length);
        return countries;
    }



const CreateTrip = ({ loaderData }: Route.ComponentProps ) => {

    console.log("loaderData:", loaderData);

    // const loader = async () => {
    //     return []; // just to satisfy Remix loader
    // };

    const countries = loaderData as Country[];

    const navigate = useNavigate();

    const countryData = countries.map((country) => ({
        text: country.name,   // الاسم الظاهر للمستخدم (مثلاً 🇫🇷 France)
        value: country.name, // القيمة المستخدمة في select (مثلاً "France")
        flag: country.flag,
    }));

    const [formData, setFormData] = useState<TripFormData>({
        country: countries[0]?.name || '',
        travelStyle: '',
        interest: '',
        budget: '',
        duration: 0,
        groupType: ''
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true);

        if(
            !formData.country ||
            !formData.travelStyle ||
            !formData.interest ||
            !formData.budget ||
            !formData.groupType
        ) {
            setError('Please provide values for all fields');
            setLoading(false)
            return;
        }

        if(formData.duration < 1 || formData.duration > 10) {
            setError('Duration must be between 1 and 10 days');
            setLoading(false)
            return;
        }
        const user = await account.get();
        if(!user.$id) {
            console.error('User not authenticated');
            setLoading(false)
            return;
        }

        try {
            console.log('user', user);
            console.log('formdata', formData);


            const response = await fetch('/api/create-trip', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    country: formData.country,
                    numberOfDays: formData.duration,
                    travelStyle: formData.travelStyle,
                    interests: formData.interest,
                    budget: formData.budget,
                    groupType: formData.groupType,
                    userId: user.$id
                })
            })

            const result: CreateTripResponse = await response.json();

            if(result?.id) navigate(`/trips/${result.id}`)
            else console.error('Failed to generate a trip')
        } catch (e) {
            console.error('Error generating trip', e);
        } finally {
            setLoading(false)
        }
    };

    const handleChange = (key: keyof TripFormData, value: string | number)  => {
        setFormData({ ...formData, [key]: value})
    }




    const mapData = [
        {
            country: formData.country,
            color: '#EA382E',
            coordinates: countries.find((c: Country) => c.name === formData.country)?.coordinates || []
        }
    ]

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const [selectedCountry, setSelectedCountry] = useState("");




    return (

        <main className="flex flex-col gap-10 pb-20 wrapper">
            <Header title="Add a New Trip" desc="View and edit AI Generated travel plans" />

            <section className="mt-2.5 wrapper-md">
                <form className="trip-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="country">
                            Country
                        </label>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-full justify-between"
                                >
                                    {selectedCountry  ? (
                                        <div className="flex gap-2 justify-baseline items-center flex-row pl-0">
                                            <img
                                                src={
                                                    restcountries.find((c) => c.name === selectedCountry )?.flag ||
                                                    "/placeholder-flag.svg"
                                                }
                                                alt={selectedCountry }
                                                className="w-5 h-4 rounded-sm object-cover"
                                            />
                                            <span> {restcountries.find((c) => c.name === selectedCountry )?.name}</span>
                                        </div>
                                    ) : (
                                        "Select Country..."
                                    )}
                                    <ChevronsUpDown className="opacity-50" />
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent className="w-[500px] p-0">
                                <Command>
                                    <CommandInput placeholder="Search Country..." className="h-9" />
                                    <CommandList>
                                        <CommandEmpty>No country found.</CommandEmpty>
                                        <CommandGroup>
                                            {restcountries.map((country) => (
                                                <CommandItem
                                                    key={country.name}
                                                    value={country.name}
                                                    onSelect={(currentValue) => {
                                                        const selected = currentValue === selectedCountry  ? "" : currentValue;
                                                        setSelectedCountry(selected);
                                                        handleChange("country", selected);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    <img
                                                        src={country.flag}
                                                        alt={country.name}
                                                        className="w-5 h-4 mr-2 rounded-sm object-cover"
                                                    />
                                                    {country.name}
                                                    <Check
                                                        className={cn(
                                                            "ml-auto",
                                                            value === country.name ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        {/* Map */}
                        <WorldMap selectedCountry={selectedCountry} />

                    </div>

                    <div>
                        <label htmlFor="duration">Duration</label>
                        <input
                            id="duration"
                            name="duration"
                            type="number"
                            placeholder="Enter a number of days"
                            className="form-input placeholder:text-gray-100"
                            onChange={(e) => handleChange('duration', Number(e.target.value))}
                        />
                    </div>

                    {selectItems.map((key) => {
                        const [open, setOpen] = React.useState(false);
                        const [value, setValue] = React.useState("");

                        return (
                            <div key={key} className="space-y-2 w-full">
                                <label htmlFor={key} className="block font-medium">
                                    {formatKey(key)}
                                </label>

                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className=" justify-between"
                                        >
                                            {value || `Select ${formatKey(key)}...`}
                                            <ChevronsUpDown className="opacity-50" />
                                        </Button>
                                    </PopoverTrigger>

                                    <PopoverContent className="w-[250px] p-0">
                                        <Command>
                                            <CommandInput
                                                placeholder={`Search ${formatKey(key)}...`}
                                                className="h-9"
                                            />
                                            <CommandList>
                                                <CommandEmpty>No item found.</CommandEmpty>
                                                <CommandGroup>
                                                    {comboBoxItems[key].map((item) => (
                                                        <CommandItem
                                                            key={item}
                                                            value={item}
                                                            onSelect={(currentValue) => {
                                                                const selected =
                                                                    currentValue === value ? "" : currentValue;
                                                                setValue(selected);
                                                                handleChange(key, selected);
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            {item}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    value === item ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        );
                    })}


                    <div>
                        <label htmlFor="location">
                            Location on the world map
                        </label>

                    </div>



                    <div className="bg-gray-200 h-px w-full" />

                    {error && (
                        <div className="error">
                            <p>{error}</p>
                        </div>
                    )}
                    <footer className="px-6 w-full">
                        <Button type="submit" className="button-class !h-12 !w-full" disabled={loading}
                        >
                            <img src={`/assets/icons/${loading ? 'loader.svg' : 'magic-star.svg'}`} className={cn("size-5", {'animate-spin': loading})} />
                            <span className="p-16-semibold text-white">
                                {loading ? 'Generating...' : 'Generate Trip'}
                            </span>
                        </Button>
                    </footer>
                </form>
            </section>
        </main>
    )
}
export default CreateTrip