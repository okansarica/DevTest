import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EngineerService} from '../services/engineer.service';
import {JobService} from '../services/job.service';
import {JobModel} from '../models/job.model';
import {CustomerModel} from '../models/customer.model';
import {CustomerService} from '../services/customer.service';
import {JobCreateModel} from "../models/job-create.model";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  public customers: CustomerModel[] = [];

  public engineers: string[] = [];

  public jobs: JobModel[] = [];

  public newJob: JobCreateModel = {
    jobId: null,
    engineer: null,
    when: null,
    customerId: null,
  };

  constructor(
    private engineerService: EngineerService,
    private jobService: JobService,
    private customerService: CustomerService) {
  }

  ngOnInit() {
    this.engineerService.GetEngineers().subscribe(engineers => this.engineers = engineers);
    this.jobService.GetJobs().subscribe(jobs => this.jobs = jobs);
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  public createJob(form: NgForm): void {
    if (form.invalid) {
      alert('form is not valid');
    }
    else {
      this.jobService.CreateJob(this.newJob).then(() => {
        this.jobService.GetJobs().subscribe(jobs => this.jobs = jobs);
      });
    }
  }

}
