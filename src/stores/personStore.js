import { defineStore } from "pinia";
import { ref } from "vue";

export const usePersonStore = defineStore("person",() => {
    const data = ref({})

async function fetchUserData() {
    try {
        console.log("Fetching user data...");
        const response = await fetch("src/assets/selfStore.json");
        data.value = await response.json();
        console.log("User data fetched successfully:", data);
        // return data.value;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }    
}

    return {
        data, fetchUserData
    }
});