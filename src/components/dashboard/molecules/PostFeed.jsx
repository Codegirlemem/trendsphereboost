function PostFeed({ post }) {
  const { image, activity } = post;

  return (
    <div className=" laptop:gap-14 flex w-fit bg-ashblue lg:gap-4">
      <div>
        <img src={image} alt="activity feed" />
      </div>

      <table className="border-[0.5px] border-black">
        <thead>
          <tr>
            {Object.keys(activity).map((heading) => (
              <th
                key={heading}
                className="laptop:text-[21px] border-[0.5px] border-black p-2 text-lg font-semibold"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {Object.values(activity).map((val) => (
              <td
                key={val}
                className=" border-[0.5px] border-black px-[17px] py-[8.5px] text-center text-base"
              >
                {val}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PostFeed;
