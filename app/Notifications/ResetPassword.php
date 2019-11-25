<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\ResetPassword as Notification;

class ResetPassword extends Notification
{
    /**
     * Build the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Reinicio de Contraseña')
            ->greeting('Hola que tal')
            ->line('Recibió este correo electrónico porque recibimos una solicitud de restablecimiento de contraseña para su cuenta.')
            ->action('Reiniciar Contraseña', url(config('app.url') . '/password/reset/' . $this->token) . '?email=' . urlencode($notifiable->email))
            ->line('Si tu no has hecho esta petición ignora el mensaje.')
            ->salutation('Gracias.');
            
    }
}
