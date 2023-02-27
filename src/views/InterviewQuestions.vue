<template>
  <the-navigations />

  <h1 class="header">Questions</h1>
  
  <div class="interview-questions">
    <div class="filter">
        <div class="filter-container">
            <div class="category-dropdown">
                <div>
                    <label class="category-dropdown-label">Category</label>

                    <select class="bn category-dropdown-button" v-model="selectedCategory">
                        <option value="All" class="DropdownItem is-all">All</option>
                        <option value="HTML" class="DropdownItem is-html">HTML</option>
                        <option value="CSS" class="DropdownItem is-css">CSS</option>
                        <option value="JavaScript" class="DropdownItem is-javascript">JavaScript</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div class="QASection">
      <ul class="questions-list">
        <div>
          <li v-for="question in filteredQuestions" :key="JSON.stringify(question)">
            <div class="question-badge">{{ question.difficulty }}</div>
            <div class="question">
              <h5 class="question-header">{{ question.question }}</h5>
              <question-answer>
                {{ question.answer }}
              </question-answer>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>

  <the-footer />
</template>

<script>
import TheFooter from "../components/TheFooter.vue"
import TheNavigations from '../components/TheNavigations.vue';
import QuestionAnswer from '../components/QuestionAnswer.vue';
import data from '@/QA.json'
export default {
  data() {
    return {
      questions: data.questions,
      selectedCategory: "All"
    }
  },
  methods: {},
  components : {QuestionAnswer, TheNavigations, TheFooter},
  computed: {
            filteredQuestions() {
              if (this.selectedCategory.toLowerCase() == "all") {
                return this.questions
              }
                return this.questions.filter((question) => 
                    question.type
                    .toLowerCase() == this.selectedCategory.toLowerCase()
                );
            },
        }
}
</script>