import productImage from "../assets/productImage.svg";

const MoreToLove = () => {

    const moreToLove = [
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        },
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        },
        ,
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        }
        ,
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        }
        ,
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        }
        ,
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        }
        ,
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        }
        ,
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        }
        ,
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        }
        ,
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        }
        ,
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        }
        ,
        {
            "name": "Binatone Quik Toaster",
            "image": productImage,
            "price": " ₦ 45,000"
        }
    ]
    return (
        <section className="section-container">
            <header className="flex justify-between">
                <div className="flex items-center ">
                     <h2 className="mr-3 md:mr-5 lg:mr-10 text-sm lg:text-base border">More to love</h2>
                    <p className="section-text-italic text-sm lg:text-xl">So much more in stock</p>
                  
                </div>

                <button >See All</button>

            </header>
            <div className=" my-5 grid gap-3 grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {moreToLove.map(item => {
                    return (
                        <div className="my-3">
                            <img src= {item.image} />
                            <p className="lg:ml-3 text-sm lg:text-lg">{item.name}</p>
                            <p className="lg:ml-3 text-sm lg:text-lg">{item.price}</p>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default MoreToLove;
