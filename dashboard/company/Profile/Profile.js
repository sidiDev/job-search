import ProfileAvatar from "../ProfileAvatar/ProfileAvatar"
import ProfileForm from "../ProfileForm/ProfileForm"

export default ({ data }) => {
    return (
        <div className="col-span-2 max-w-lg">
            <ProfileAvatar data={data} />
            <ProfileForm data={data} />
        </div>
    )
}