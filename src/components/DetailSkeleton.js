export const DetailSkeleton = () => {
  return (
    <div class="flex items-center lg:items-start flex-wrap w-11/12 lg:w-4/5 gap-5 sm:p-4 h-full rounded lg:flex-row ">
      <div class="bg-gray-200 w-full max-w-sm h-96 image rounded-lg animate-pulse"></div>
      <div class="flex flex-col flex-1  gap-8">
        <div class="flex flex-col gap-8">

          <div className="flex flex-col flex-1 gap-2">
            <div class="w-full bg-gray-200 animate-pulse h-10 rounded"></div>
            <div class="w-4/5 bg-gray-200 animate-pulse h-10 rounded"></div>
          </div>

          <div class="flex flex-col flex-1 gap-2">
            <div class="w-full h-5 bg-gray-200 animate-pulse rounded"></div>
            <div class="w-full h-5 bg-gray-200 animate-pulse rounded"></div>
            <div class="w-full h-5 bg-gray-200 animate-pulse rounded"></div>
            <div class="w-full h-5 bg-gray-200 animate-pulse rounded"></div>
            <div class="w-4/5 h-5 bg-gray-200 animate-pulse rounded"></div>
          </div>

        </div>
        <div class="flex flex-col flex-1 gap-3">
          <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
