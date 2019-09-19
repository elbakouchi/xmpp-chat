import { Component, Vue } from 'vue-property-decorator';
import WithRender from '@/templates/home.html';

@WithRender
@Component
export default class HomeContent extends Vue {
    public msg: string = 'I am using TypeScript classes with Vue!';
    public test: string = 'test!';
}
