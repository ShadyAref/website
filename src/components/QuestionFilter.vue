<!-- <template>
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

    <div v-for="question in filteredQuestions" :key="JSON.stringify(question)">
        {{ question.question }}
    </div>
</template>

<script>
import data from '@/QA.json'

    export default {
        data() {
            return {
                open: false,
                active: false,
                questions: data.questions,
                selectedCategory: "All"
            }
        },
        methods: {
            display() {
                this.open = !this.open
                const ulItems = document.querySelector(".category-dropdown-items");

                if(this.open){
                    ulItems.style.visibility = "visible";
                }else{
                    ulItems.style.visibility = "hidden";
                }
            },

            editCategory(e) {
                // this.active = !this.active
                this.selectedCategory = e.target.innerHTML

                // if(this.active){
                //     e.target.classList.add("is-active");
                // }else{
                //     e.target.classList.remove("is-active");
                // }
                
            }
        },
        // filters: {
        //     filterQuestionsByCategory() {
        //         return this.questions.filter(question => !question.type.indexOf(this.type))
        //     }
        // }
        computed: {
            filteredQuestions() {
                return this.questions.filter((question) => 
                    question.type
                    .includes(this.selectedCategory)
                );
            },
        }
    }
</script> -->
