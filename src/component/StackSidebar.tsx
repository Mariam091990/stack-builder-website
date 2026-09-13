
type Technology = {
    id: string;
    icon: string;
    name: string;
    category: string;
};

type StackProps = {
    stack: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
};

const YourStack = ({ stack,  onRemove, onRemoveAll}: StackProps) => {


    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

            {/* Heading */}
            <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-bold">
                    Your Stack
                </h2>

                <span className="text-sm text-gray-600 whitespace-nowrap">
                    {stack.length} Technology Selected
                </span>
            </div>

            {/* Empty State */}
            {stack.length === 0 && (
                <div className="mt-10 text-center py-10">
                    <p className="text-gray-500">
                        No technologies added yet.
                    </p>

                    <p className="mt-2 text-sm text-gray-400">
                        Add technologies to build your stack.
                    </p>
                </div>
            )}

            {/* Stack Items */}
            {stack.length > 0 && (
                <div className="mt-6 space-y-3">

                    {stack.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex  text-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-300"
                        >
                            {/* Icon */}
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="w-10 h-10 object-contain"
                            />

                            {/* Name + Category */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-black">
                                    {technology.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {technology.category}
                                </p>
                            </div>

                            {/* Remove */}
                            <button
                                onClick={() => onRemove(technology.id)}
                                className="text-gray-500 hover:text-red-500 text-xl font-bold"
                            >
                                ✕
                            </button>
                        </div>
                    ))}

                    {/* Remove All */}
                    <button
                        onClick={onRemoveAll}
                        className="w-full mt-4 py-2 rounded-lg border border-red-500 text-red-500"
                    >
                        Remove All
                    </button>

                </div>
            )}

        </div>
    );
};

export default YourStack;
