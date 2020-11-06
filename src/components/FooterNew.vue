<template>
    <div class="footer-contain">
        <div class="footer-wrap">

            <div class="social-wrap">
                <a class="icon-tag" href="https://www.facebook.com/REAL-Property-Investing-109022127574705/" target="_blank">
                    <font-awesome-icon class="icon fb" :icon="['fab', 'facebook-f']" />
                </a>
                <a class="icon-tag" href="https://www.instagram.com/realpropertyinvestingllc/" target="_blank">
                    <font-awesome-icon class="icon ig" :icon="['fab', 'instagram']" />
                </a>
            </div>

            <p>Copyright &copy; 2020 Real Property Investing. All Rights Reserved.</p>

        </div>
    </div>
</template>

<script>
export default {
    name: 'NewFooter'
}
</script>

<style lang="scss" scoped>
    .footer-contain {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        background-color: var(--d-gray);

        .footer-wrap {
            color: var(--white);

            .social-wrap {
                display: flex;
                justify-content: center;
                margin-bottom: 35px;

                .icon-tag {
                    color: var(--white);
                    padding: 0px 10px;
                    transition: all 0.2s ease-in-out;

                    &:hover {
                        color: var(--l-blue);
                    }
                }
            }

            p {
                font-size: 0.9rem;
            }
        }
    }
</style>