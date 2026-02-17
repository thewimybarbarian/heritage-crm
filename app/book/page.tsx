import { Contact } from '@/components/sections/Contact'
import { Phone, Mail, Clock } from 'lucide-react'

export default function BookPage() {
    return (
        <>
            <div className="h-32 bg-stone-50" />

            <div className="container-custom py-16 text-center">
                <h1 className="heading-lg text-sage-900 mb-6 font-serif">Schedule Your Free Consultation</h1>
                <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-16">
                    There’s no pressure, no obligation, and no rushing. Let’s just sit down and talk about what you need.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                        <Phone className="w-10 h-10 text-sand-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-sage-800 mb-2">Call Us Directly</h3>
                        <a href="tel:5551234567" className="text-lg text-sage-600 block hover:text-sand-600 font-medium">(555) 123-4567</a>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                        <Mail className="w-10 h-10 text-sand-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-sage-800 mb-2">Email Anytime</h3>
                        <a href="mailto:help@heritagehomesolutions.com" className="text-lg text-sage-600 block hover:text-sand-600 font-medium">help@heritagehomesolutions.com</a>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                        <Clock className="w-10 h-10 text-sand-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-sage-800 mb-2">Flexible Hours</h3>
                        <p className="text-lg text-sage-600">Mon-Sat: 8am - 8pm<br /><span className="text-sm text-stone-500">Sunday by appointment</span></p>
                    </div>
                </div>
            </div>

            <Contact />
        </>
    )
}
