import "./profile.css";
import profilePlaceholder from "../../assets/profile-placeholder.webp";
interface IProfile {
  person: any;
}
const Profile: React.FC<IProfile> = ({ person }) => {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        {person.profile_path ? (
          <img
            src={`${process.env.IMAGE_PATH_XS}${person.profile_path}`}
            alt=""
            className="profile-image"
          />
        ) : (
          <img
            src={profilePlaceholder}
            alt="profile placeholder"
            className="profile-placeholder-image"
          />
        )}
      </div>
      <div className="person-profile-info">
        <div className="person-original-name">{person.original_name}</div>
        <div className="person-character-name">{person.character}</div>
      </div>
    </div>
  );
};

export default Profile;
