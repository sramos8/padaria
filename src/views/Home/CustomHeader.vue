<template>
    <header class="header">
        <div class="header-group">
            <div class="flex items-center justify-between py-10">
                <div>
                    <img src="../../assets/imagens/titulo.png" alt="logo" width="250px" height="500px">
                </div>
                <div class="flex">
                    <button
                    class="px-6 py-2 font-bold rounded-full text-white focus:outline-none">
                        Entrar
                    </button>
                    <button class="px-6 py-2 font-bold bg-white rounded-full text-brand-DarkOrange focus:outline-none">
                        Criar sua conta
                    </button>
                </div>
            </div>
            <div class="flex flex-col mt-28">
                <h1 class="text-4xl font-black text-white">
                    Tenha sua cotação dos produtos.<br class="hidden lg:inline-block">
                    E deixe seu feedback.
                </h1>
                <div>
                    <button
                        class="px-6 py-2 mt-10 font-bold bg-white rounded-full text-brand-DarkOrange focus:outline-none">
                        Crie sua conta grátis
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  setup (_, { emit }) {
    return emit
  }
}
</script>
<style lang="postcss">
@layer {
    .header {
        @apply bg-brand-Ambar w-full flex justify-center;
        height: 500px;
    }
}

@layer {
    .header-group {
        @apply flex flex-col w-4/5 max-w-6xl;
    }
}

@layer {
    @media (min-width: 640px) {
        .header-group {
            background-image: url(../../assets/imagens/logo.png);
            background-size: 550px;
            background-position: 100% 95%;
            background-repeat: no-repeat;
        }
    }
}
</style>
