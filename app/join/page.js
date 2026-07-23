'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import { getSupabaseClient } from '@/lib/supabase';

const initialForm = {
  full_name: '',
  contact: '',
  intent: '',
};

export default function Join() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [submission, setSubmission] = useState({
    status: 'idle',
    message: '',
  });

  const isSubmitting = submission.status === 'loading';
  const hasSucceeded = submission.status === 'success';

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));

    if (submission.status === 'error') {
      setSubmission({ status: 'idle', message: '' });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const fullName = form.full_name.trim();
    const contact = form.contact.trim();
    const intent = form.intent.trim();

    if (!fullName || !contact || !intent) {
      setSubmission({
        status: 'error',
        message: 'Please complete all required fields.',
      });
      return;
    }

    setSubmission({ status: 'loading', message: 'Submitting your request…' });

    try {
      const supabase = getSupabaseClient();
      const isEmail = contact.includes('@');
      const { error } = await supabase.from('people').insert({
        full_name: fullName,
        email: isEmail ? contact : null,
        phone: isEmail ? null : contact,
        intent,
        stage: 'lead',
      });

      if (error) {
        throw error;
      }

      setSubmission({
        status: 'success',
        message: 'Request received. Redirecting to the member preview…',
      });

      window.setTimeout(() => {
        router.replace('/member');
      }, 800);
    } catch {
      setSubmission({
        status: 'error',
        message: 'We could not submit your request. Please try again.',
      });
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="wrap pagePad narrow">
        <div className="eyebrow">Start simply</div>
        <h1 className="pageTitle">How would you like to begin?</h1>
        <div className="choiceCards">
          <div className="choiceCard">
            <h3>Book a focused session</h3>
            <p>Product, business, operating system or pitch deck support.</p>
          </div>
          <div className="choiceCard">
            <h3>Join an event</h3>
            <p>Apply for a high-context working room or community session.</p>
          </div>
          <div className="choiceCard">
            <h3>Create a simple account</h3>
            <p>Save ideas and manage bookings without building a full profile.</p>
          </div>
          <div className="choiceCard">
            <h3>Activate dynamic identity</h3>
            <p>
              Opt into evidence, feedback, resources and professional growth.
            </p>
          </div>
        </div>
        <form className="panel joinForm" onSubmit={handleSubmit} noValidate>
          <label htmlFor="full_name">Name</label>
          <input
            id="full_name"
            name="full_name"
            value={form.full_name}
            onChange={updateField}
            placeholder="Your name"
            autoComplete="name"
            required
            disabled={isSubmitting || hasSucceeded}
          />

          <label htmlFor="contact">Phone or email</label>
          <input
            id="contact"
            name="contact"
            value={form.contact}
            onChange={updateField}
            placeholder="Your preferred contact"
            required
            disabled={isSubmitting || hasSucceeded}
          />

          <label htmlFor="intent">What brings you here?</label>
          <textarea
            id="intent"
            name="intent"
            value={form.intent}
            onChange={updateField}
            rows="5"
            placeholder="Product, business, pitch deck, event, community..."
            required
            disabled={isSubmitting || hasSucceeded}
          />

          <button
            className="button primary"
            type="submit"
            disabled={isSubmitting || hasSucceeded}
          >
            {isSubmitting ? 'Submitting…' : 'Continue to member preview'}
          </button>

          {submission.message ? (
            <p
              className="muted"
              role={submission.status === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {submission.message}
            </p>
          ) : null}
        </form>
      </main>
    </>
  );
}
