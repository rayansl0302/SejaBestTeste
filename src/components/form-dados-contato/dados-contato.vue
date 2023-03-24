<template>
  <div
    class="p-6 bg-gray-300 border shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div id="contato-form" class="form-area mt-10 sm:mt-0">
      <div
        class="form-content shadow rounded-lg bg-white border-gray-700 md:grid md:grid-cols-3"
      >
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-base font-semibold leading-6 text-gray-900">
              Dados de Contato
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Por favor preencha o formulário.
            </p>
            <div class="steps">
              <div class="md:grid md:grid-cols-12 md:gap-6">
                <ol
                  class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4"
                >
                  <a href="/">
                    <li class="flex items-center">
                      <span
                        class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
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
                  </a>
                  <li
                    class="flex items-center text-blue-600 dark:text-blue-500"
                  >
                    <span
                      class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
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
          <form action="#" method="POST">
            <div class="overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 sm:p-6">
                <div class="grid grid-cols-12 gap-6">
                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="email-address"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Email:</label
                    >
                    <input
                      type="email"
                      v-model="v$.data.email.$model"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.data.email.$errors"
                      :key="index"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="phone"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Telefone:</label
                    >
                    <input
                      type="text"
                      v-model="v$.data.telefone.$model"
                      name="phone"
                      id="phone"
                      autocomplete="given-name"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.data.telefone.$errors"
                      :key="index"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                  <div class="col-span-12 sm:col-span-12">
                    <label
                      for="endereco"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Endereço:</label
                    >
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="region"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >CEP</label
                    >
                    <input
                      type="text"
                      v-model="v$.data.cep.$model"
                      name="cep"
                      @keyup="searchCep()"
                      id="cep"
                      autocomplete="address-level1"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.data.cep.$errors"
                      :key="index"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="region"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Estado</label
                    >
                    <input
                      type="text"
                      v-model="data.uf"
                      name="region"
                      id="data.uf"
                      autocomplete="address-level2"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="city"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Cidade</label
                    >
                    <input
                      type="text"
                      name="city"
                      v-model="data.localidade"
                      id="cidade"
                      autocomplete="address-level3"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="city"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Bairro</label
                    >
                    <input
                      type="text"
                      name="bairro"
                      v-model="data.bairro"
                      id="bairro"
                      autocomplete="address-level4"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label
                      for="street-address"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Rua</label
                    >
                    <input
                      type="text"
                      name="street-address"
                      v-model="data.logradouro"
                      id="rua"
                      autocomplete="street-address"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="street-address"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Número</label
                    >
                    <input
                      type="number"
                      name="street-address"
                      v-model="v$.data.numero.$model"
                      id="numero"
                      autocomplete="street-address"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.data.numero.$errors"
                      :key="index"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="street-address"
                      class="block text-sm font-medium leading-6 text-gray-900"
                      >Complemento</label
                    >
                    <input
                      type="text"
                      name="street-address"
                      v-model="v$.data.complemento.$model"
                      id="complemento"
                      autocomplete="street-address"
                      class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div
                      class="input-errors"
                      v-for="(error, index) of v$.data.complemento.$errors"
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
                  style="cursor: pointer"
                  type="submit"
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
import axios from "axios";
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
      data: {
        cep: "",
        bairro: null,
        uf: null,
        localidade: null,
        logradouro: null,
        telefone: "",
        numero: "",
        complemento: null,
        email: "",
      },
    };
  },
  methods: {
    searchCep() {
      if (this.data.cep.length == 8) {
        axios
          .get(`https://viacep.com.br/ws/${this.data.cep}/json/`, {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((response) => (this.data = { ...this.data, ...response.data }))
          .catch((error) => console.log(error));
      }
    },
    async proximaPag() {
      if (await this.v$.$validate()) {
        this.$router.push("/dados-profissionais");
      }
    },
  },
  validations() {
    return {
      data: {
        cep: {
          required: helpers.withMessage(
            "Por favor preencha o campo.",
            required
          ),
          min: helpers.withMessage(
            "Minimo de caractéres aceitos:8",
            minLength(8)
          ),
        },
        email: {
          required: helpers.withMessage(
            "Por favor preencha o campo.",
            required
          ),
          email: helpers.withMessage("Endereço de e-mail invalido", email),
        },
        telefone: {
          required: helpers.withMessage(
            "Por favor preencha o campo.",
            required
          ),
        },
        numero: {
          required: helpers.withMessage(
            "Por favor preencha o campo.",
            required
          ),
        },
        complemento: {
          required: helpers.withMessage(
            "Por favor preencha o campo.",
            required
          ),
        },
      },
    };
  },
};
</script>

<style scoped>
</style>