import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZrNavigationBarModule } from 'src/components/header/zr-navigation-bar/zr-navigation-bar.module';
import { ZrCopyrightZoneModule } from 'src/components/footer/zr-copyright-zone/zr-copyright-zone.module';
import { ZrResumeIntroModule } from 'src/components/content/zr-resume-intro/zr-resume-intro.module';
import { ZrResumeAboutModule } from './content/zr-resume-about/zr-resume-about.module';
import { ZrResumeSkillsModule } from './content/zr-resume-skills/zr-resume-skills.module';
import { ZrResumeExperienceModule } from './content/zr-resume-experience/zr-resume-experience.module';
import { ZrResumeEducationModule } from './content/zr-resume-education/zr-resume-education.module';
import { ZrResumePortfolioModule } from './content/zr-resume-portfolio/zr-resume-portfolio.module';
import { ZrResumeContactModule } from './content/zr-resume-contact/zr-resume-contact.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    ZrNavigationBarModule,
    ZrResumeIntroModule,
    ZrResumeAboutModule,
    ZrResumeSkillsModule,
    ZrResumeExperienceModule,
    ZrResumeEducationModule,
    ZrResumePortfolioModule,
    ZrResumeContactModule,
    ZrCopyrightZoneModule,
  ],
})
export class ZrContentLandingPageModule {}
