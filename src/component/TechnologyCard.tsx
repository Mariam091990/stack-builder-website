type Technology = {
    icon: string;
    badge: string;
    name: string;
    description: string;
    category: string;
    difficulty: string;
    rating: number | string;
};

type TechnologyCardProps =
    {
        technology: Technology;
        onAdd: (technology: Technology) => void;
        isAdded: boolean;
    };

const TechnologyCard = ({ technology, onAdd, isAdded }: TechnologyCardProps) => {

    const { icon, badge, name, description, category, difficulty, rating, } = technology;






    return (
        
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

                {/* Icon + Badge */}
                <div className="flex items-center justify-between">
                    <img
                        src={icon}
                        alt={name}
                        className="w-14 h-14 object-contain"
                    />

                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700">
                        {badge}
                    </span>
                </div>

                {/* Name */}
                <h2 className="mt-5 text-2xl font-bold">
                    {name}
                </h2>

                {/* Description */}
                <p className="mt-3 text-black leading-relaxed">
                    {description}
                </p>

                {/* Category + Difficulty */}
                <div className="mt-5 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                        {category}
                    </span>

                    <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                        {difficulty}
                    </span>
                </div>

                {/* Rating */}
                <div className="mt-5 flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">★</span>
                    <span className="font-semibold text-black">
                        {rating}
                    </span>
                </div>

                {/* Button */}
                {/* <button className="mt-6 w-full py-3 rounded-lg font-semibold text-white bg-linear-to-r from-purple-600 to-pink-500 hover:opacity-90 transition">
                    Add to Stack
                </button> */}
                {/* <button onClick={() => onAdd(technology)} disabled={isAdded} className={`mt-6 w-full py-3 rounded-lg font-semibold transition ${isAdded ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "text-white bg-linear-to-r from-purple-600 to-pink-500 hover:opacity-90"}`} > {isAdded ? "✓ Added to Stack" : "Add to Stack"} </button> */}
<button onClick={() => onAdd(technology)} className="mt-6 w-full py-3 rounded-lg text-white bg-linear-to-r from-purple-600 to-pink-500 hover:opacity-90" > {isAdded ? "✓ Added to Stack" : "Add to Stack"} </button>
            </div>
    
    );
};

export default TechnologyCard;