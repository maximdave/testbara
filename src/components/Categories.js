import Bunny from "../assets/bunny.svg";
import FemaleShoesIcon from "../assets/cat-fash.svg";



const Categories = () => {

    const categories = [{
        "name": "Super Market",
        "src": Bunny

    }, {
        "name": "Female Shoes",
        "src": FemaleShoesIcon

    }, {
        "name": "Skin & beauty",
        "src": FemaleShoesIcon

    },
    {
        "name": "Computing",
        "src": FemaleShoesIcon

    },
    {
        "name": "Automobile",
        "src": FemaleShoesIcon

    },
    {
        "name": "Home Deco",
        "src": FemaleShoesIcon

    },
    {
        "name": "Home Deco",
        "src": FemaleShoesIcon

    },

    {
        "name": "Toys",
        "src": FemaleShoesIcon

    },
    {
        "name": "Smartphones",
        "src": FemaleShoesIcon

    },
    {
        "name": "Dresses",
        "src": FemaleShoesIcon

    },
    {
        "name": "Baby Products",
        "src": FemaleShoesIcon

    },
    {
        "name": "All categories",
        "src": FemaleShoesIcon

    }

    ]




    return (
        <section className=" shadow-lg py-2 px-1 grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mx-auto w-11/12 mt-24  gap-5 lg:gap-2 rounded bg-white">
            {categories.map(category => {
                return (
                    <div className="flex flex-col lg:flex-row items-center ">
                        <img src={category.src} alt="category" />
                        <p className="lg:ml-3 text-center text-xs lg:text-base">{category.name}</p>
                    </div>
                )

            })}

        </section>

    );

}

export default Categories;