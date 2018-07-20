<template>
    <section>
        <router-view></router-view>
    </section>
</template>

<script type="text/javascript">

export default{
    name: 'app'
};

</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
body {
    height: 100%;
    font-size: 14px;
    background-color: #f8f8f8;
}

section {
    height: 100%;
}

.block-title {
    font-size: 16px;
    font-weight: 400;
    padding: .15rem;
    /*margin-bottom: .04rem;*/
    color: rgba(69, 90, 100, .6);
}

.block {
    /*margin-bottom: .04rem;*/
    /*padding: .2rem 0;*/
    background-color: #ffffff;
    margin-bottom: .2rem;

}

.text-center {
    text-align: center;
}
</style>
