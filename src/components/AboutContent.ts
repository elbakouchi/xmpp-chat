import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/templates/about.html';

@WithRender
@Component
export default class AboutContent extends Vue {
}
