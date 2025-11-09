import {cn} from "~/lib/utils";
import {Link, useLocation} from "react-router";

interface Props {
    title: string;
    desc: string;
    ctaText?: string;
    ctaUrl?: string;
}

const Header = ({title, desc, ctaText, ctaUrl} :Props) => {
     const location = useLocation();

    return (
        <header className='header'>
            <article>
                <h1 className={cn('text-dark-100',
                    location.pathname === '/' ?
                        'text-2xl md: text-4xl font-bold' :
                        'text-xl md:text-2xl font-semibold' )}>{title}</h1>
                <p className={cn('text-gray-500',
                    location.pathname === '/' ?
                        'text-xl md: text-xl' :
                        'text-xl md:text-xl font-semibold' )}>{desc}</p>
            </article>

            {ctaText && ctaUrl && (
                <Link to={ctaUrl}>
                    <button type="button" className="button-class !h-10 !w-full md:w-[250px] cursor-pointer animate-pulse">
                        <img src="/assets/icons/plus.svg" alt="plus" className="size-5" />
                        <span className="p-16-semibold text-white">{ctaText}</span>
                    </button>
                </Link>
            )}
        </header>
    );
};

export default Header;