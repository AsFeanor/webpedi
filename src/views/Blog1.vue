<template>
    <div>
        <Header></Header>
        <div class="container-lg" style="margin-top: 80px">
            <div class="row">
                <BlogPost></BlogPost>
                <RightList></RightList>
            </div>
        </div>
        <MightInterest></MightInterest>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import BlogPost from "@/components/BlogPost.vue";
    import RightList from "@/components/RightList.vue";
    import MightInterest from "@/components/MightInterest.vue";

    export default {
        name: "Blog1",
        components: {
            Header,
            BlogPost,
            RightList,
            MightInterest
        },
    };
</script>

