import {Link, useLocation} from "react-router";
import {cn} from "~/lib/utils";

const TripsCard = (
    {id, name, imageUrl, location, tags, price}: TripCardProps) => {

    const path = useLocation();

    let key;
    return (
        <Link to={path.pathname === '/' || path.pathname.startsWith('/travel') ? `/travel/${id}` : `/trips/${id}`} className='trip-card'>
            <img src={imageUrl} alt={name}/>

            <article>
                <h2>{name}</h2>
                <figure>
                    <img src="/assets/icons/location-mark.svg" alt="location" className='size-3'/>
                    <figcaption>{location}</figcaption>
                </figure>
            </article>

            <div className='mt-6 pl-[16px] pr-3 pb-4'>
                <p id="travel-chip">
                    {tags.map((tag, index) =>(
                        <span key={index} className={cn(index == 1 ? '!bg-purple-300 !text-purple-600 rounded-lg p-1 m-1' : '!bg-green-300 !text-green-600 rounded-lg p-1 m-1')}>{tag}</span>
                    ))}
                </p>
            </div>
            <article className="tripCard-pill">{price}</article>


        </Link>
    );
};

export default TripsCard;