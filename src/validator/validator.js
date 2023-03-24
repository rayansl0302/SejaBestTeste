import { useVuelidate } from "@vuelidate/core";
import {
    required,
    email,
    minLength,
    maxLength,
    helpers,
} from "@vuelidate/validators";

export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            form: {
                name: "",
                cpf: "",
                date_birth: " ",
            },
        };
    },
    validations() {
        return {
            form: {
                cpf: {
                    required: helpers.withMessage(
                        "Por favor preencha o campo.",
                        required
                    ),
                    min: helpers.withMessage(
                        "Minimo de caractéres aceitos:11",
                        minLength(11)
                    ),
                },
                name: {
                    required: helpers.withMessage(
                        "Por favor preencha o campo.",
                        required
                    ),
                    min: helpers.withMessage(
                        "Minimo de caractéres aceitos:3",
                        minLength(3)
                    ),
                },
                date_birth: {
                    required,
                },
            },
        };
    },
    methods: {
        async proximaPag() {
            if (await this.v$.$validate()) {
                this.$router.push("/dados-contato");
            }
        },
    },
};