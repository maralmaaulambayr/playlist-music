import marla from "../../assets/images/img.jpeg"
export const AvatarContainer = ({

    name = "Marla"
  }) => {
    return (
      <div className="flex avatar-container align-center">
        <img className="avatar" alt="avatar" src={marla} />
        <h6>{name}</h6>
      </div>
    );
  };