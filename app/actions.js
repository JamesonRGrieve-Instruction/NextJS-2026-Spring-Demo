'use server';

import { cookies } from 'next/headers';

export async function doAThing(prevState, formData) {
    console.log(prevState, formData);

    return { success: true };
}