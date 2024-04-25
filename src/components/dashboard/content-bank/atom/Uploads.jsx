import Hash from '../../../../assets/dashboard/icons/hash.svg';
import Links from '../../../../assets/dashboard/icons/link.svg';
import Upload from '../../../../assets/dashboard/icons/upload-cloud.svg';

function Uploads() {
  const style = 'flex items-center justify-between gap-2';
  return (
    <div className="flex justify-between p-2 font-montserrat text-base">
      <div className={style}>
        <img src={Upload} alt="upload icon" />
        <span>Upload Media</span>
      </div>
      <div className={style}>
        <img src={Links} alt="upload icon" />
        <span>Add Links</span>
      </div>

      <div className={style}>
        <img src={Hash} alt="upload icon" />
        <span>Add Tags</span>
      </div>
    </div>
  );
}

export default Uploads;
