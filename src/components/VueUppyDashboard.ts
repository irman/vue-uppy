import { Component, Prop, Vue } from 'vue-property-decorator';
import Uppy, { UppyOptions } from '@uppy/core';
import Dashboard, { DashboardOptions } from '@uppy/dashboard';
import XHRUpload, { XHRUploadOptions } from '@uppy/xhr-upload';

@Component
export default class VueUppyDashboard extends Vue {
  @Prop({
    default: () => 'Hello',
  }) private msg!: string;
  @Prop() private options!: UppyOptions;
  @Prop() private dashboardOptions!: DashboardOptions;
  @Prop() private xhrUploadOptions!: XHRUploadOptions;
  @Prop() private endpoint!: string;

  private divId: string = 'vue-uppy';
  private uppy: Uppy.Uppy | null = null;

  public mounted() {
    this.uppy = Uppy(this.options);
    this.dashboardOptions.trigger = this.divId;
    this.uppy.use(Dashboard, this.dashboardOptions);
    this.uppy.use(XHRUpload, this.xhrUploadOptions);
  }

  get Uppy(){
    return this.uppy;
  }
}
