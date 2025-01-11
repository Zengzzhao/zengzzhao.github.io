<template>
    <div class="w-full px-4 flex-center">
        <div class="yun-notice w-full">
            <div>
                <h1 class="typing">
                    本站不定时更新...
                </h1>
            </div>
        </div>
    </div>
</template>


<style>
.yun-notice {
    border: 1px solid var(--va-c-text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--va-font-serif);
    font-weight: bold;
    padding: 1rem;
    max-width: var(--yun-post-card-max-width);
    background-color: rgb(200 200 200 / 0.1);
}

.typing {
    overflow: hidden;
    /* Ensures the content is not revealed until the animation */
    border-right: .15em solid #000000;
    /* The typwriter cursor */
    white-space: nowrap;
    /* Keeps the content on a single line */
    margin: 0 auto;
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em;
    /* Adjust as needed */
    animation:
        typing 3s steps(9, end) infinite,
        blink-caret .3s step-end infinite;
}

/* The typing effect */
@keyframes typing {
    0% {
        width: 0;
    }

    40% {
        width: 100%;
        /* 打字过程 */
    }

    70% {
        width: 100%;
        /* 保持显示文字 */
    }

    90% {
        width: 0;
        /* 删除过程 */
    }

    100% {
        width: 0;
        /* 回到初始状态 */
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: #000000
    }
}
</style>
