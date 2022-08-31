// import {addCommunity} from '../../Core/Communities/addCommunity'
export function SignUp(id, email, firstName, lastName, profileImage, bio) {

        return {
                type: 'SignUp',
                id,
                email: email,
                first_name: firstName,
                last_name: lastName,
                profile_image: profileImage,
                bio,
                active_count:1,

        } 
}
export function SignIn(data) {

        return {
                type: 'SignIn',
                id: data?.id,
                email: data?.email, 
                first_name: data?.first_name,
                last_name: data?.last_name,
                profile_image: data?.image,
                bio: data?.bio,
                notification: data?.NotificationToken,
                timestamp: data?.timestamp,
                // count: data?.count
                
        }
}
export function EditProfile(data) {

        return {
                type: 'EditProfile',
                id: data.id,
                email: data.email,
                first_name: data.first_name,
                last_name: data.last_name,
                profile_image: data.image,
                bio: data.bio


        }
}
export function AddCommunity(user_id, communityName, communityType, communityStatus, category_id, communityDescription, communityImage, status) {

        return {
                type: 'Add_Community',
                user_id, communityName, communityType, communityStatus, category_id, communityDescription, communityImage, status

        }
}
export function GetCommunity(data) {

        return {
                type: 'Get_Community',
                data

        }
}

export function AllJoinedGetCommunity(data) {
        var obj = {
                data: data
        }
        return {
                type: 'Get_All_Community',
                data: obj?.data

        }
}
export function AllJoinedMembers(data) {

        return {
                type: 'Get_All_Members',
                data

        }
}

export const Logout = () => ({
        type: 'LOG_OUT',
});
export function GetEvents(data) {

        return {
                type: 'Get_Events',
                data

        }
}
export function GETNOTIFICATIONS(data) {

        return {
                type: 'GET_NOTIFICATIONS',
                data

        }
}

export function GetRooms(data) {

        return {
                type: 'GET_ROOMS',
                data

        }
}