'use client';
import ExperienceList from '../components/Experience/ExperienceList';
import ListHeader from '../components/ListHeader/ListHeader';
import ClientList from '../components/Partners/ClientList';
import SkillsList from '../components/Skills/SkillsList';

function ExperiencePage() {
  return (
    <>
      <ListHeader title='Experiences' />
      <ExperienceList />
      <ListHeader
        title='Skills'
        subtitle='I have experience with the following technologies'
      />
      <SkillsList />
      <ListHeader title='Clients' />
      <ClientList />
    </>
  );
}

export default ExperiencePage;
