import baseApi from "@/store/api/baseApi";
import { GetProfileResponse, RemoveProfilePictureResponse, UpdateProfilePictureRequest, UpdateProfilePictureResponse, UpdateProfileRequest, UpdateProfileResponse } from "@/types/profile";

export const profileApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query<GetProfileResponse, void>({
            query: () => ({
                url: "/user/profile",
                method: "GET",
            }),
            providesTags: ["Profile"],
        }),

        updateProfile: builder.mutation<UpdateProfileResponse,UpdateProfileRequest>({
            query: (body) => ({
                url: "/user/profile",
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Profile"],
        }),

        updateProfilePicture: builder.mutation<UpdateProfilePictureResponse,UpdateProfilePictureRequest>({
            query: ({ profilePicture }) => {
                const formData = new FormData();
                formData.append("profilePicture", profilePicture);

                return {
                    url: "/user/profile-picture",
                    method: "PUT",
                    body: formData,
                };
            },
            invalidatesTags: ["Profile"],
        }),

        removeProfilePicture: builder.mutation<RemoveProfilePictureResponse,void>({
            query: () => ({
                url: "/user/profile-picture",
                method: "DELETE",
            }),
            invalidatesTags: ["Profile"],
        }),
    }),
});

export const {
    useGetProfileQuery,
    useUpdateProfileMutation,
    useUpdateProfilePictureMutation,
    useRemoveProfilePictureMutation,
} = profileApi