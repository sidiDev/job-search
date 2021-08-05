import ProfileAvatar from "../ProfileAvatar/ProfileAvatar"
import ProfileForm from "../ProfileForm/ProfileForm"

export default () => {
    return (
        <div className="col-span-2 max-w-lg">
            <ProfileAvatar />
            <ProfileForm />
        </div>
    )
}