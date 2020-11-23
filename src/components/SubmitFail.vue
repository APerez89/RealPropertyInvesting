<template>
    <div class="submit-fail-contain">
        <h1>Oops, looks like something went wrong!</h1>
        <router-link to="/">
            <button>Back to home</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'SubmitFail'
}
</script>

<style lang="scss" scoped>
.submit-fail-contain {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 25px;

    h1 {
        margin-bottom: 15px;
    }

    button {
        border: none;
        text-decoration: none;
        font-size: 1.1rem;
        color: var(--white);
        background-color: var(--l-blue);
        margin-top: 15px;
        padding: 15px 45px;
        border-radius: 50px;
        cursor: pointer;

        &:hover {
            background-color: var(--d-blue);
        }

        &:focus {
            outline: none;
        }
    }
}
</style>