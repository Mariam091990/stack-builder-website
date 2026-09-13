import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./StackSidebar";


type Technology = {
  id: string;
  icon: string;
  badge: string;
  name: string;
  description: string;
  category: string;
  difficulty: string;
  rating: number | string;
};


const Technologies = () => {
  const [technologyList, setTechnologyList] = useState<Technology[]>([]);

  const [loading, setLoading] = useState(true);

  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    const loadTechnologies = async () => {
      setLoading(true);
      const response = await fetch("/data.json");
      const data: Technology[] = await response.json();
      setTechnologyList(data);
      setLoading(false);
    };

    loadTechnologies();

  }, []);

  // Add technology
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    } else {
      setStack([...stack, technology]);
      toast.success(`${technology.name} added to your stack!`);


    }
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    const remainingTechnologies = stack.filter((technology) => technology.id !== id);
    setStack(remainingTechnologies);
    toast.success(`${id} removed from your stack!`);
  };

  // Remove all
  const handleRemoveAll = () => {
    setStack([]);
    toast.success("Your stack is now empty!");
  };

  return (

    <div className="container mx-auto">
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Technology Cards */}
        {loading ?
          (<div className="lg:col-span-3 flex justify-center items-center min-h-60"> <span className="loading loading-spinner loading-lg"></span> </div>)
          : (

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyList.map((technology: Technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={(technology) => handleAdd(technology as Technology)}
                  stack={stack}
                />
              ))}
            </div>
          )}
        {/* Your Stack */}
        <div className="lg:col-span-1">
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>

      </div>
    </div>
  );
};
export default Technologies;

