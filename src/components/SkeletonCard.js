export const SkeletonCard = () => {
  return (
    <div className="relative cart m-4 max-w-sm bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="skeleton image rounded-t-lg"></div>
      <div className="p-5">
        <div className="mb-2">
          <div className="skeleton text-skeleton head-skeleton rounded"></div>
          <div className="skeleton text-skeleton head-skeleton rounded"></div>
        </div>
        <div className="skeleton text-skeleton span-skeleton rounded"></div>
        <div className="mt-2">
          <div className="skeleton text-skeleton body-skeleton rounded"></div>{" "}
          <div className="skeleton text-skeleton body-skeleton rounded"></div>
          <div className="skeleton text-skeleton body-skeleton rounded"></div>
          <div className="skeleton text-skeleton body-skeleton rounded"></div>
        </div>
      </div>
    </div>
  );
};
