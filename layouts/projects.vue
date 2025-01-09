<template>
    <div class="main">
        <div class="titleContainer">
            <BorderBox9>
                <h1>项目橱窗</h1>
            </BorderBox9>
        </div>
        <projectsList />
    </div>
    <YunFooter />
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.main {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .titleContainer {
        width: 20%;
        height: 50px;
        h1 {
            text-align: center;
            font-size: 1.5rem;
            line-height: 50px;
        }
    }
}
</style>