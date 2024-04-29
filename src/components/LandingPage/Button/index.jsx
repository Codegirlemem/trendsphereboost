const btn = `flex font-roboto text-base font-medium items-center justify-center rounded-lg px-6 `;
const btnOrange = `text-white bg-orange py-4`;

export default function CustomButton({
  width = 'w-full',
  type = btnOrange,
  children,
}) {
  return <button className={`${btn} ${type} ${width}`}>{children}</button>;
}
