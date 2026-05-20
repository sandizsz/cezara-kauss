import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import RegistrationForm from '@/components/RegistrationForm';

export default function SignUpPage() {
  return (
    <>
      <Navigation />
      <main className="animate-fade-in">
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
