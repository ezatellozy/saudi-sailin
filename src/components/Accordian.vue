<template>
  <section class="licesne relative pb-10">
    <img src="../assets/header-bg1.svg" alt="" />
    <h2
      class="text-center text-2xl font-bold text-primary flex justify-center items-center"
    >
      Contact Us
    </h2>
    <div class="container mx-auto mt-40" v-if="questions.length">
      <div
        class="box border mb-4 rounded-2xl overflow-hidden"
        v-for="question in questions"
        :key="question.id"
      >
        <transition class="fade">
          <div
            class="accordian-header rounded-2xl p-4 flex justify-between"
            style="box-shadow: 0px 3px 6px #00000029"
            @click="question.open = !question.open"
            :class="question.open ? 'active bg-gray' : 'bg-primary'"
          >
            <h3
              class="font-bold"
              :class="question.open ? 'text-secondary' : 'text-white'"
            >
              {{
                $i18n.locale == "en" ? question.question : question.questionAr
              }}
            </h3>
            <font-awesome-icon
              :icon="['fas', question.open ? 'minus' : 'plus']"
              style="transform:rotate:(180deg);transition:0.3s "
              :class="question.open ? 'text-secondary' : 'text-white'"
            ></font-awesome-icon>
          </div>
        </transition>
        <transition class="fade">
          <div
            class="accordian-content p-4"
            style="transition: 0.3s"
            v-show="question.open"
          >
            <p class="leading-7" style="transition: 0.3s">
              {{ $i18n.locale == "en" ? question.answer : question.answerAr }}
            </p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      questions: [
        {
          id: 1,
          open: true,
          question: "What is Sailing?",
          questionAr: "ما هو الإبحار الشراعي؟",
          answer:
            "Sailing connects oneself to the natural surroundings, because it harnesses natural energy to power the sail therefore representing an individual’s mind, whereas the natural elements represent the individual’s thought flow and everyday stressors - the body and mind connect with wind, speed, direction and the flow of the waves beneath. Independently it can be chaotic and destructive and may inevitably capsize, however with skill and practice, it can be harnessed to harmonize each component to provide thrust and acceleration. Peace of mind is represented by the silence and harmonization of the sail like achieving the skill to harmonize and harness thought flow and stressors in a positive manner.",
          answerAr:
            "كانت تصنف رياضة الإبحار الشراعي (المعروفة أيضًا باسم الإبحار باليخت حتى عام 2000) ضمن إحدى الرياضات الأولمبية منذ دورة الألعاب الأولمبية الأولى، التي أقيمت في أثينا، اليونان، في عام 1896. وعلى الرغم من كونها مقررة في البرنامج الأولمبي الأول، فقد تم إلغاء السباقات في صيف 1904 بسبب سوء الأحوال الجوية. ولكن من بعد ذلك العام كان الإبحار حاضرًا في كل من الألعاب الأولمبية فما بعد.",
        },
        {
          id: 2,
          open: false,
          question: "Become a Sailor?",
          questionAr: "ما هو الإبحار الشراعي؟",
          answer:
            "Sailing connects oneself to the natural surroundings, because it harnesses natural energy to power the sail therefore representing an individual’s mind, whereas the natural elements represent the individual’s thought flow and everyday stressors - the body and mind connect with wind, speed, direction and the flow of the waves beneath. Independently it can be chaotic and destructive and may inevitably capsize, however with skill and practice, it can be harnessed to harmonize each component to provide thrust and acceleration. Peace of mind is represented by the silence and harmonization of the sail like achieving the skill to harmonize and harness thought flow and stressors in a positive manner.",
          answerAr:
            "كانت تصنف رياضة الإبحار الشراعي (المعروفة أيضًا باسم الإبحار باليخت حتى عام 2000) ضمن إحدى الرياضات الأولمبية منذ دورة الألعاب الأولمبية الأولى، التي أقيمت في أثينا، اليونان، في عام 1896. وعلى الرغم من كونها مقررة في البرنامج الأولمبي الأول، فقد تم إلغاء السباقات في صيف 1904 بسبب سوء الأحوال الجوية. ولكن من بعد ذلك العام كان الإبحار حاضرًا في كل من الألعاب الأولمبية فما بعد.",
        },
        {
          id: 3,
          open: false,
          question: "What is Kiteboarding or kitesurfing?",
          questionAr: "ما هو التزلج الشراعي؟",
          answer:
            "It is an individual sport that depends on the natural factors of the wind and the surface of the water, and it is surfing on the surface of the water using custom boards and relying on the wind to pull with a dedicated sail that is secured and connected to the passenger",
          answerAr:
            "هي رياضة فردية تعتمد على العوامل الطبيعية من الرياح وسطح الماء، وهي عبارة عن تزلج على سطح الماء باستخدام الألواح المخصصة والاعتماد على الرياح للسحب بواسطة شراع مخصص مؤمن ومتصل بالراكب",
        },
        {
          id: 4,
          open: false,
          question: "Windsurfing",
          questionAr: "رياضات التزلج الشراعي؟",
          answer:
            " It is an individual sport that is a mixture of sailing and kitesurfing, using a sail of about 2.5 meters attached to a surfboard of 2 to 3 meters. When the sail catches the wind it pushes the board and propels it over the surface of the water",
          answerAr:
            "هي احدى رياضات التزلج الشراعي وهي رياضة فردية عبارة عن مزيج من ركوب الأمواج والإبحار الشراعي باستخدام شراع حوالي 2.5 متر متصل بلوح ركوب الأمواج من 2 إلى 3 متر. عندما يلتقط الشراع الرياح تدفع اللوحة على سطح الماء",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: display 1s;
}
.v-enter-to, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
