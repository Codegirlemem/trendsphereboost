function StatFigure({ data }) {
  const { image, title, growth } = data;
  return (
    <figure className="flex w-56 flex-col items-center gap-1 rounded-2xl bg-orange p-2 xl:w-[260px] xl:p-4">
      <div className="flex items-center justify-center gap-2 p-2">
        <img src={image} alt={`${title} icon`} />
        <figcaption className=" text-lg xl:text-xl">{title}</figcaption>
      </div>
      <span className="font-exo text-[40px] font-semibold">{growth}</span>
      <p>Last 28 Days</p>
    </figure>
  );
}

export default StatFigure;
