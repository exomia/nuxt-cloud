<template>
    <div class="center">
        <form>
            <TheLogo></TheLogo>
            <div class="form-section">
                <LandingInput
                    :placeholder="usernamePH"
                    :error="$v.username.$error"
                    :icon="'user'"
                    @update:value="username = $event"
                    @enterPress="signIn()"
                ></LandingInput>
                <LandingInput
                    :placeholder="passwordPH"
                    :error="$v.password.$error"
                    :icon="'lock'"
                    :type="'password'"
                    @update:value="password = $event"
                    @enterPress="signIn()"
                ></LandingInput>
            </div>
            <div class="form-section">
                <input
                    class="confirm"
                    type="button"
                    :value="this.$i18n.t('views.home.signIn')"
                    @click="signIn()"
                />
                <input
                    class="subConfirm"
                    type="button"
                    :value="this.$i18n.t('views.home.forgotPassword')"
                    @click="$parent.login = 'pw_reset'"
                />
            </div>
        </form>
    </div>
</template>

<script>
/* Imports */
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import TheLogo from '@/views/home/components/TheLogo'
import LandingInput from '@/components/LandingInput.vue'

export default {
    components: {
        TheLogo,
        LandingInput
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    computed: {
        usernamePH: function() {
            return this.$t('views.home.nameOrEmail')
        },
        passwordPH: function() {
            return this.$t('views.home.password')
        }
    },
    methods: {
        signIn: async function() {
            this.$v.$touch()
            if (!this.$v.$error) {
                this.$http
                    .post('/v1/auth/login', {
                        username: this.username,
                        password: this.password
                    })
                    .then(({ data, error }) => {
                        if (!error) {
                            this.$store.commit('setUserInfo', data)
                            this.$router.push({ name: 'overview-dir' })
                        }
                    })
            }
        }
    },
    validations: {
        username: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(64)
        },
        password: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(72)
        }
    }
}
</script>

<style src="@/assets/scss/components/LandingForm.scss" lang="scss" scoped></style>
