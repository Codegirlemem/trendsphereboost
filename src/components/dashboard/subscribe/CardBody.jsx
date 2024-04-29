import Features from './Features';
import Naira from '../../../assets/icons/mdi_naira.svg';

function CardBody({ features, discount }) {
  return (
    <div className="text-base">
      {discount && (
        <div className="mb-8 flex items-start justify-between font-medium">
          <p>
            Save more than 30% <br /> on Annual Plan
          </p>
          <p className="flex items-center gap-2">
            <img src={Naira} alt="Naira currency sign" />
            <span className="line-through">{discount}</span>
          </p>
        </div>
      )}

      <div className="mr-6 flex flex-col gap-8 ">
        <Features features={features} />
        <p className="text-center font-medium">
          Payment Methods vary by country
        </p>
      </div>
    </div>
  );
}

export default CardBody;
