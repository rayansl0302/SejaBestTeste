<template>
  <div
    class="p-6 bg-gray-300 border shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="form-area mt-10 sm:mt-0">
      <div
        class="form-content shadow rounded-lg bg-white md:grid md:grid-cols-3"
      >
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-base font-semibold leading-6 text-gray-900">
              Dados Pessoais
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Por favor preencha o formulário.
            </p>
            <div class="steps">
              <div class="md:grid md:grid-cols-12 md:gap-6">
                <ol
                  class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4"
                >
                  <li
                    class="flex items-center text-blue-600 dark:text-blue-500"
                  >
                    <span
                      class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
                    >
                      1
                    </span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 sm:ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </li>
                  <li class="flex items-center">
                    <span
                      class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
                    >
                      2
                    </span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 sm:ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </li>
                  <li class="flex items-center">
                    <span
                      class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
                    >
                      3
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST" @submit="onSubmit">
            <div class="overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Nome:</label
                    >
                    <input
                      type="text"
                      name="name"
                      v-model="v$.form.name.$model"
                      id="name"
                      autocomplete="given-name"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.name.$errors"
                      :key="index"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="cpf"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >CPF:</label
                    >
                    <input
                      type="string"
                      v-model="v$.form.cpf.$model"
                      name="cpf"
                      id="cpf"
                      autocomplete="family-name"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.cpf.$errors"
                      :key="index"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="date-of-birth"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Data de Nascimento:</label
                    >
                    <input
                      type="date"
                      v-model="v$.form.date_birth.$model"
                      name="date-of-birth"
                      id="date-of-birth"
                      autocomplete="email"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.form.date_birth.$errors"
                      :key="index"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 text-right sm:px-6">
                <a
                  @click="proximaPag"
                  type="submit"
                  style="cursor: pointer"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >Próximo</a
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
          required: helpers.withMessage(
            "Por favor preencha o campo.",
            required
          ),
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
</script>

<style scoped>
</style>