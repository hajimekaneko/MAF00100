<template>
    <div class="container apps">
        <div class="row">
            <div class="col">
                STOCKCHARTのページです。
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'site-body'
    }
</script>

<style scoped>
    @media (min-width: 768px) {
        footer {
            padding: 0;
            height: 50px;
            display: grid;
            grid-template-columns: 1fr 700px 1fr;
            grid-template-rows: 1fr;
        }
        footer > * {
            grid-column: 2;
            grid-row: 1;
        }
        p {
            justify-self: start;
            align-self: center;
        }
        ul {
            justify-self: end;
            align-self: center;
        }
    }
    @media (min-width: 1024px) {
        footer {
            grid-template-columns: 1fr 980px 1fr;
        }
    }
</style>
