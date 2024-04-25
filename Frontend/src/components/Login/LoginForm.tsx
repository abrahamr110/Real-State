"use-server";

interface ILoginForm {
    provider: string;
    form?: FormData;
}

export const LoginForm = async ({ provider, form }: ILoginForm) => {
    // if (provider === "google") {
    //     return await
    // }
};
