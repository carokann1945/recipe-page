export default function Home() {
  return (
    <main>
      <article className="w-full max-w-[736px] bg-white md:mx-auto md:w-auto md:p-[40px] md:rounded-[24px] md:flex md:flex-col md:gap-[40px]">
        {/* 이미지 영역 */}
        <div className="relative w-full aspect-164/75 bg-[url('/images/image-omelette.jpeg')] bg-no-repeat bg-cover md:rounded-[12px]"></div>
        {/* 콘텐츠 영역 */}
        <div className="w-full flex flex-col gap-[32px] px-[32px] py-[40px] md:p-0">
          {/* title */}
          <div className="w-full flex flex-col gap-[24px] text-stone-900">
            <h1 className="font-youngSerif text-[36px] leading-none">Simple Omelette Recipe</h1>
            <p className="font-outfit text-[16px] text-stone-600">
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to
              perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          {/* preperation time */}
          <div className="w-full flex flex-col gap-[16px] p-[24px] rounded-[12px] bg-rose-50">
            <h2 className="text-preset-3 text-rose-800">Preparation time</h2>
            <ul className="w-full flex flex-col gap-[8px]">
              <li className="flex items-center pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="size-1 rounded-full bg-brown-800"></span>
                </div>
                <span className="text-preset-4 text-stone-600">
                  <b>Total:</b> Approximately 10 minutes
                </span>
              </li>
              <li className="flex items-center pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="size-1 rounded-full bg-brown-800"></span>
                </div>
                <span className="text-preset-4 text-stone-600">
                  <b>Preperation:</b> 5 minutes
                </span>
              </li>
              <li className="flex items-center pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="size-1 rounded-full bg-brown-800"></span>
                </div>
                <span className="text-preset-4 text-stone-600">
                  <b>Cooking:</b> 5 minutes
                </span>
              </li>
            </ul>
          </div>
          {/* Ingredients */}
          <div className="w-full flex flex-col gap-[24px]">
            <h2 className="text-preset-2 text-brown-800">Ingredients</h2>
            <ul className="w-full flex flex-col gap-[8px]">
              <li className="flex items-center pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center">
                  <span className="size-1 rounded-full bg-brown-800 shrink-0"></span>
                </div>
                <span className="text-preset-4 text-stone-600">2-3 large eggs</span>
              </li>
              <li className="flex items-center pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="size-1 rounded-full bg-brown-800"></span>
                </div>
                <span className="text-preset-4 text-stone-600">Salt, to taste</span>
              </li>
              <li className="flex items-center pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="size-1 rounded-full bg-brown-800"></span>
                </div>
                <span className="text-preset-4 text-stone-600">Pepper, to taste</span>
              </li>
              <li className="flex items-center pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="size-1 rounded-full bg-brown-800"></span>
                </div>
                <span className="text-preset-4 text-stone-600">1 tablespoon of butter or oil</span>
              </li>
              <li className="flex items-center pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="size-1 rounded-full bg-brown-800"></span>
                </div>
                <span className="text-preset-4 text-stone-600">
                  Optional fillings: cheese, diced vegetables, cooked meats, herbs
                </span>
              </li>
            </ul>
          </div>
          {/* line */}
          <div className="w-full h-px bg-stone-150"></div>
          {/* Instructions */}
          <div className="w-full flex flex-col gap-[24px]">
            <h2 className="text-preset-2 text-brown-800">Instructions</h2>
            <ul className="w-full flex flex-col gap-[8px]">
              <li className="flex pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="text-preset-4-bold text-brown-800">1.</span>
                </div>
                <span className="text-preset-4 text-stone-600">
                  <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well
                  mixed. You can add a tablespoon of water or milk for a fluffier texture.
                </span>
              </li>
              <li className="flex pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="text-preset-4-bold text-brown-800">2.</span>
                </div>
                <span className="text-preset-4 text-stone-600">
                  <b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.
                </span>
              </li>
              <li className="flex pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="text-preset-4-bold text-brown-800">3.</span>
                </div>
                <span className="text-preset-4 text-stone-600">
                  <b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to
                  ensure the eggs evenly coat the surface.
                </span>
              </li>
              <li className="flex pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="text-preset-4-bold text-brown-800">4.</span>
                </div>
                <span className="text-preset-4 text-stone-600">
                  <b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny
                  in the middle, sprinkle your chosen fillings over one half of the omelette.
                </span>
              </li>
              <li className="flex pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="text-preset-4-bold text-brown-800">5.</span>
                </div>
                <span className="text-preset-4 text-stone-600">
                  <b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the
                  fillings. Let it cook for another minute, then slide it onto a plate.
                </span>
              </li>
              <li className="flex pl-[8px] gap-[16px]">
                <div className="w-[16px] h-full flex items-center shrink-0">
                  <span className="text-preset-4-bold text-brown-800">6.</span>
                </div>
                <span className="text-preset-4 text-stone-600">
                  <b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.
                </span>
              </li>
            </ul>
          </div>
          {/* line */}
          <div className="w-full h-px bg-stone-150"></div>
          {/* Nutrition */}
          <div className="w-full flex flex-col gap-[24px]">
            <h2 className="text-preset-2 text-brown-800">Nutrition</h2>
            <p className="text-preset-4 text-stone-600">
              The table below shows nutritional values per serving without the additional fillings.
            </p>
            <div className="w-full flex flex-col gap-[12px]">
              <div className="w-full flex gap-[16px] px-[32px] justify-between">
                <span className="w-full text-preset-4 text-stone-600">Calories</span>
                <span className="w-full text-preset-4-bold text-brown-800">277Kcal</span>
              </div>
              <div className="w-full h-px bg-stone-150"></div>
              <div className="w-full flex gap-[16px] px-[32px] justify-between">
                <span className="w-full text-preset-4 text-stone-600">Carbs</span>
                <span className="w-full text-preset-4-bold text-brown-800">0g</span>
              </div>
              <div className="w-full h-px bg-stone-150"></div>
              <div className="w-full flex gap-[16px] px-[32px] justify-between">
                <span className="w-full text-preset-4 text-stone-600">Protein</span>
                <span className="w-full text-preset-4-bold text-brown-800">20g</span>
              </div>
              <div className="w-full h-px bg-stone-150"></div>
              <div className="w-full flex gap-[16px] px-[32px] justify-between">
                <span className="w-full text-preset-4 text-stone-600">Fat</span>
                <span className="w-full text-preset-4-bold text-brown-800">22g</span>
              </div>
              <div className="w-full h-px bg-stone-150"></div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
