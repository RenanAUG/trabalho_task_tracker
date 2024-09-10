package com.example.Task.Tracker.service;

import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.model.Usuario;
import com.example.Task.Tracker.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario save(Usuario usuario) {
        return this.usuarioRepository.save(usuario);
    }
}
