import { FC } from "react";

interface SlugPageProps {
  params: {
    mealSlug: string;
  };
}
const MealDetailsPage: FC<SlugPageProps> = ({ params }) => {
  return <h1>{params.mealSlug}</h1>;
};

export default MealDetailsPage;
