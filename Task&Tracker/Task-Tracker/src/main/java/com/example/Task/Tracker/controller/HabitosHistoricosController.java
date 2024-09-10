package com.example.Task.Tracker.controller;

import com.example.Task.Tracker.model.HabitosHistoricos;
import com.example.Task.Tracker.repository.UsuarioRepository;
import com.example.Task.Tracker.service.HabitosHistoricosService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/habitos_historicos")
public class HabitosHistoricosController {

    private final HabitosHistoricosService habitosHistoricosService;

    public HabitosHistoricosController(HabitosHistoricosService habitosHistoricosService) {
        this.habitosHistoricosService = habitosHistoricosService;
    }

    @PostMapping()
    public ResponseEntity<HabitosHistoricos> salvarHabitosHistoricos(@RequestBody HabitosHistoricos habitosHistoricos) {
        return ResponseEntity.ok(habitosHistoricosService.save(habitosHistoricos));
    }
}
