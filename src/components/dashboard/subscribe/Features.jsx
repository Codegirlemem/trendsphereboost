import CheckBox from '../../../assets/icons/plan-checkbox.svg';

function Features({ features }) {
  return (
    <div className="flex flex-col gap-4">
      {features.map((feature) => {
        return (
          <div key={feature} className="flex items-center gap-2 p-2">
            <img src={CheckBox} alt="checked sign" />
            <p>{feature}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Features;
