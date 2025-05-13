import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/shared/ui";
import "./Category.css";
import { useSearchParams } from "react-router-dom";
import useMenuStore from "@/shared/store/menuStore";

type CategoryType = {
  children: ReactNode;
}

type ParamsType = {
  tab?: string;
  category?: string;
}

const Category = ({ children }: CategoryType) => {
  const { categories } = useMenuStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [getParams, setParams] = useState<ParamsType>();

  useEffect(() => {
    const tab = searchParams.get("tab") || "drinks";
    const category = searchParams.get("category");
    
    if (category) {
      setParams({ tab, category });
    } else {
      // If no category is specified, set the first subcategory as default
      const currentCategory = categories.find(cat => cat.query === tab);
      if (currentCategory && currentCategory.subcategories.length > 0) {
        const defaultCategory = currentCategory.subcategories[0].query;
        setParams({ tab, category: defaultCategory });
        setSearchParams(prev => {
          const params = Object.fromEntries(prev.entries());
          return { ...params, category: defaultCategory };
        });
      } else {
        setParams({ tab });
      }
    }
  }, [searchParams, categories, setSearchParams]);

  const handleTabClick = (category: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, category });
  };

  return (
    <div className="category">
      <div className="category__buttons">
        {categories.find(cat => cat.query === (getParams?.tab || "drinks"))?.subcategories.map((link, index) => (
          <Button 
            key={index} 
            isList={link.isDropbox} 
            onClick={() => handleTabClick(link.query)} 
            isActive={getParams?.category === link.query}
          >
            {link.name}
          </Button>
        ))}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Category;